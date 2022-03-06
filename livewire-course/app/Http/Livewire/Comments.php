<?php

namespace App\Http\Livewire;

use App\Models\Comment;
use Carbon\Carbon;
use Livewire\Component;

class Comments extends Component
{
    public $comments;
    public $newComment;

    protected $rules = [
        "newComment" => "required|max:255"
    ];

    public function mount()
    {
        $this->comments = Comment::all();
    }

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }

    public function addComment()
    {
        $this->validate();
        $newComment = Comment::create([
            "body" => $this->newComment,
            'user_id' => 1
        ]);
        $this->comments->prepend($newComment);
        $this->newComment = "";
    }

    public function render()
    {
        return view('livewire.comments');
    }
}
