using AutoMapper;
using review_api.Dto;
using review_api.models;

namespace review_api.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Pokemon, PokemonDto>();
        }
    }
}
