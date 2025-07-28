using libreriaNeoris.Domain.Dto;
using LibreriaNeoris.Domain.Dto.Rest;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace libreriaNeoris.Domain.Services.Interface
{
    public interface IUserServices
    {
        Task<ResponseDto> Login(UserDto user);
        Task<ResponseDto> Register(UserDto user);
        Task<ResponseDto> GetAllUsers(string token);
        Task<ResponseDto> UpdateUser(UserDto user, String token);

    }
}
