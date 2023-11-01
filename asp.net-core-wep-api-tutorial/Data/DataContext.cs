using Microsoft.EntityFrameworkCore;
using review_api.models;

namespace review_api.Data;
public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Country> Countries { get; set; }
    public DbSet<Owner> Owners { get; set; }
    public DbSet<Pokemon> Pokemons { get; set; }
    public DbSet<OwnerPokemon> OwnerPokemon { get; set; }
    public DbSet<CategoryPokemon> CategoryPokemon { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<Reviewer> Reviewers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CategoryPokemon>()
            .HasKey(category_pokemon => new { category_pokemon.CategoryId, category_pokemon.PokemonId });
        modelBuilder.Entity<CategoryPokemon>()
            .HasOne(category_pokemon => category_pokemon.Pokemon)
            .WithMany(pokemon => pokemon.PokemonCategories)
            .HasForeignKey(category_pokemon => category_pokemon.PokemonId);
        modelBuilder.Entity<CategoryPokemon>()
            .HasOne(category_pokemon => category_pokemon.Category)
            .WithMany(category => category.CategoryPokemons)
            .HasForeignKey(category_pokemon => category_pokemon.CategoryId);

        modelBuilder.Entity<OwnerPokemon>()
                .HasKey(owner_pokemon => new { owner_pokemon.OwnerId, owner_pokemon.PokemonId });
        modelBuilder.Entity<OwnerPokemon>()
                .HasOne(owner_pokemon => owner_pokemon.Pokemon)
                .WithMany(pokemon => pokemon.PokemonOwners)
                .HasForeignKey(owner_pokemon => owner_pokemon.PokemonId);
        modelBuilder.Entity<OwnerPokemon>()
                .HasOne(owner_pokemon => owner_pokemon.Owner)
                .WithMany(owner => owner.OwnerPokemons)
                .HasForeignKey(owner_pokemon => owner_pokemon.OwnerId);
    }
}
