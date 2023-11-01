using review_api.models;

namespace review_api.interfaces;
public interface IPokemonRepository
{
    ICollection<Pokemon> GetPokemons();
    Pokemon? GetPokemon(int id);
    Pokemon? GetPokemon(string name);
    decimal GetPokemonRating(int pokemonId);
    bool PokemonExists(int pokemonId);
}
