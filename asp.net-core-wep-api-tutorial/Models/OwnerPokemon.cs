namespace review_api.models;
public class OwnerPokemon
{
    public int OwnerId { get; set; }
    public int PokemonId { get; set; }
    public Owner Owner { get; set; }
    public Pokemon Pokemon { get; set; }
}
