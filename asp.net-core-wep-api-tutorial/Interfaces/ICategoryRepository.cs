using review_api.models;

namespace review_api.interfaces
{
    public interface ICategoryRepository
    {
        ICollection<Category> GetCategories();
        Category? GetCategory(int categoryId);
        ICollection<Pokemon> GetPokemonsByCategory(int catgeoryId);
        bool CategoryExists(int categoryId);
    }
}
