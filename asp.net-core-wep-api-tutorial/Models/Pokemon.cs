namespace review_api.models;
public class Pokemon
{
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime BirthDate { get; set; }
    public ICollection<Review> Reviews { get; set; }
    public ICollection<CategoryPokemon> PokemonCategories { get; set; }
    public ICollection<OwnerPokemon> PokemonOwners { get; set; }
}
