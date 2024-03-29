<?php

namespace App\Http\Controllers;

use App\Http\Requests\QnA\StoreQuestionAndAnswerRequest;
use App\Http\Requests\QnA\UpdateQuestionAndAnswerRequest;
use App\Models\QuestionAndAnswer;
use Inertia\Inertia;

class QuestionAndAnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $questionAndAnswer = QuestionAndAnswer::all();
        return Inertia::render('QuestionAndAnswer/List', [
            'questions' => $questionAndAnswer
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return to_route("admin.question-and-answer.index");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreQuestionAndAnswerRequest $request)
    {
        //
        $questionAndAnswer = new QuestionAndAnswer();
        $questionAndAnswer->question = $request->question;
        $questionAndAnswer->answer = $request->answer;
        $questionAndAnswer->save();

        return to_route("admin.question-and-answer.index", $questionAndAnswer);
    }

    /**
     * Display the specified resource.
     */
    public function show(QuestionAndAnswer $questionAndAnswer)
    {
        //
        return to_route("admin.question-and-answer.index", $questionAndAnswer);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(QuestionAndAnswer $questionAndAnswer)
    {
        //
        return to_route("admin.question-and-answer.index", $questionAndAnswer);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQuestionAndAnswerRequest $request, QuestionAndAnswer $questionAndAnswer)
    {
        //
        $questionAndAnswer->question = $request->question;
        $questionAndAnswer->answer = $request->answer;
        $questionAndAnswer->save();

        return to_route("admin.question-and-answer.index", $questionAndAnswer);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(QuestionAndAnswer $questionAndAnswer)
    {
        //
        $questionAndAnswer->delete();
        return to_route("admin.question-and-answer.index", $questionAndAnswer);
    }
}
