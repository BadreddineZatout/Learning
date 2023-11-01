using review_api.Data;
using review_api.interfaces;
using review_api.models;

namespace review_api.repositories;
public class PokemonRepository : IPokemonRepository
{
    private readonly DataContext _context;
    public PokemonRepository(DataContext context)
    {
        _context = context;
    }

    public Pokemon? GetPokemon(int pokemonId)
    {
        return _context.Pokemons.Find(pokemonId);    //.Where(p => p.Id == pokemonId).FirstOrDefault();
    }

    public Pokemon? GetPokemon(string name)
    {
        return _context.Pokemons.Where(p => p.Name == name).FirstOrDefault();
    }

    public decimal GetPokemonRating(int pokemonId)
    {
        var reviews = _context.Reviews.Where(r => r.Pokemon.Id == pokemonId);
        if (!reviews.Any()) return 0;
        return (decimal)reviews.Sum(r => r.Rating) / reviews.Count();
    }

    public ICollection<Pokemon> GetPokemons()
    {
        return _context.Pokemons.OrderBy(p => p.Id).ToList();
    }

    public bool PokemonExists(int pokemonId)
    {
        return _context.Pokemons.Any(p => p.Id == pokemonId);
    }
}
