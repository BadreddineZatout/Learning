namespace review_api.models;
public class CategoryPokemon
{
    public int CategoryId { get; set; }
    public int PokemonId { get; set; }
    public Category Category { get; set; }
    public Pokemon Pokemon { get; set; }
}
