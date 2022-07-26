using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductStore.Models;

namespace ProductStore.Services
{
    public interface IUserService
    {
        IReadOnlyList<User> GetAllUsers();
        User CreateUser(User user);
        void DeleteUser(int id);
        User UpdateUser(int id, string name);
    }
}
