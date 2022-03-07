<?php

namespace App\Http\Livewire;

use App\Models\Comment;
use Carbon\Carbon;
use Livewire\Component;
use Livewire\WithPagination;

class Comments extends Component
{
    use WithPagination;

    public $newComment;
    public $image;

    protected $rules = [
        "newComment" => "required|max:255"
    ];

    protected $listeners = [
        'fileUploaded' => 'handleFileUploaded'
    ];

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }

    public function addComment()
    {
        $this->validate();
        $image = $this->storeImage();
        Comment::create([
            "body" => $this->newComment,
            'user_id' => 1
        ]);
        $this->newComment = "";

        session()->flash("message", 'Comment added successfully!');
    }

    public function remove($id)
    {
        Comment::destroy($id);
        session()->flash("message", 'Comment deleted successfully!');
    }

    public function handleFileUploaded($image)
    {
        $this->image = $image;
    }


    public function render()
    {
        return view('livewire.comments', [
            "comments" => Comment::latest()->paginate(2)
        ]);
    }
}
