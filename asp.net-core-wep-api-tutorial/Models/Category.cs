﻿namespace review_api.models;
public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public ICollection<CategoryPokemon> CategoryPokemons { get; set; }
}
