using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductStore.Models;
using ProductStore.Services;

namespace ProductStore.Controllers
{
    public class UserController : Controller
    {
        public UserController(IUserService userService)
        {
            m_userService = userService;
        }

        public IActionResult Index()
        {
            return View();
        }

        // 
        // GET: /HelloWorld/Welcome/ 

        public string Welcome()
        {
            return "This is the Welcome action method...";
        }

        public string Users()
        {
            var userList = m_userService.GetAllUsers();
            var users = "";
            foreach (var user in userList)
            {
                users += $"ID: {user.Id}, Name: {user.Name}, Email: {user.Email} \n";
            }
            
            return users;

        }

        public string Create(string name, string email, string password)
        {
            if (name == null)
            {
                return "404 Bad Request: Name cannot be null";
            }
            if (email == null)
            {
                return "404 Bad Request: Email cannot be null";
            }
            if (password == null)
            {
                return "404 Bad Request: Password cannot be null";
            }

            var user = new User
            {
                Name = name,
                Email = email,
                Password = password,
            };

            var createdUser = m_userService.CreateUser(user);

            return $"ID: {createdUser.Id}, Name: {createdUser.Name}, Email: {createdUser.Email}, Password: {createdUser.Password}";
        }

        public string Delete(int id)
        {
            if (id == 0)
            {
                return "404 bad request: ID cannot be null";
            }
            return $"Deleted user with ID of {id}";
        }

        public string Update(int id, string name)
        {
            if (id == 0)
            {
                return "404 Bad Request: ID cannot be null";
            }
            if (name == null)
            {
                return "404 Bad Request: Name cannot be null";
            }

            return $"Updated user with ID: {id} to have name of {name}";

        }

        private readonly IUserService m_userService;
        
    }
}
