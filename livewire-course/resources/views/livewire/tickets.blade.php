<div class="border mt-6 w-1/2 mr-3 px-1">
    <h1 class="text-3xl text-gray-800 font-semibold">Support Tickets </h1>
    @foreach ($tickets as $ticket)
        <div class="rounded border shadow p-3 my-2 cursor-pointer {{ $active == $ticket->id ? 'bg-green-200' : '' }}"
            wire:click="$emit('ticketSelected', {{ $ticket->id }})">
            <p class="text-gray-800">{{ $ticket->question }}</p>
        </div>
    @endforeach
</div>
