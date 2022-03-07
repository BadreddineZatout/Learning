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
        $this->comments = Comment::latest()->paginate(2);
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

        session()->flash("message", 'Comment added successfully!');
    }

    public function remove($id)
    {
        Comment::destroy($id);
        $this->comments = $this->comments->except($id);
        session()->flash("message", 'Comment deleted successfully!');
    }

    public function render()
    {
        return view('livewire.comments');
    }
}
