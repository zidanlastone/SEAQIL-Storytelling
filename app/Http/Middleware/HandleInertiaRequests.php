<?php

namespace App\Http\Middleware;

use App\Models\I18n\Language;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use App\Models\Menu;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        $menus = [];

        $locale = $request->input('locale');
        $where = [
            'language_id' => 1,
        ];

        if ($locale) {
            $language = Language::where('code', $locale)->first();
            if ($language)
                $where['language_id'] = $language->id;
        }

        if ($user) {
            $menus = Menu::whereIn('roles', $user->roles()->pluck('name'))
                ->where($where)
                ->get()
                ->unique('route');
        }

        // dd($menus);
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
                'menus' => $menus
            ],
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
