<div class="w-1/2 mt-6">
    <h1 class="text-3xl text-gray-800 font-semibold">Comments</h1>
    <div>
        @if (session()->has('message'))
            <div class="p-3 bg-green-300 text-green-800 rounded-md shadow-sm">
                {{ session('message') }}
            </div>
        @endif
    </div>
    <section>
        @if ($image)
            <img src={{ $image }} width="200">
        @endif
        <input type="file" name="image" id="image" wire:change="$emit('fileUpload')">
    </section>
    <form class="my-4 flex" wire:submit.prevent="addComment">
        <input type="text" class="w-full rounded border shadow p-2 mr-2 my-2" placeholder="What's in your mind."
            wire:model.lazy='newComment'>
        <div class="py-2">
            <button type="submit" class="p-2 bg-blue-500 w-20 rounded shadow text-white">Add</button>
        </div>
    </form>
    @error('newComment')
        <span class="error">{{ $message }}</span>
    @enderror
    @foreach ($comments as $comment)
        <div class="rounded border shadow p-3 my-2">
            <div class="flex justify-between my-2">
                <div class="flex">
                    <p class="font-bold text-lg">{{ $comment->user->name }}</p>
                    <p class="mx-3 py-1 text-xs text-gray-500 font-semibold">
                        {{ $comment->created_at->diffForHumans() }}
                    </p>
                </div>
                <x-heroicon-o-x class="text-red-200 hover:text-red-600 cursor-pointer h-4 w-4"
                    wire:click="remove({{ $comment->id }})" />
            </div>
            <p class="text-gray-800">{{ $comment->body }}</p>
        </div>
    @endforeach
    {{ $comments->links('pagination-links') }}
</div>

<script>
    Livewire.on('fileUpload', () => {
        console.log("here")
        let inputField = document.querySelector('#image');
        let file = inputField.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            Livewire.emit("fileUploaded", reader.result)
        }
        reader.readAsDataURL(file);
    })
</script>
