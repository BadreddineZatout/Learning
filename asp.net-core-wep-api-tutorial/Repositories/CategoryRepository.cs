using Microsoft.EntityFrameworkCore;
using review_api.Data;
using review_api.interfaces;
using review_api.models;

namespace review_api.repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _context;
        public CategoryRepository(DataContext context)
        {
            _context = context;
        }
        public bool CategoryExists(int categoryId)
        {
            return _context.Categories.Any(c => c.Id == categoryId);
        }

        public ICollection<Category> GetCategories()
        {
            return _context.Categories.OrderBy(p => p.Id).ToList();
        }

        public Category? GetCategory(int categoryId)
        {
            return _context.Categories.Find(categoryId);
        }
        public ICollection<Pokemon> GetPokemonsByCategory(int catgeoryId)
        {
            return _context.CategoryPokemon.Where(e => e.CategoryId == catgeoryId).Select(e => e.Pokemon).ToList();
        }
    }
}
