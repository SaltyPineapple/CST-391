using ProductStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;


namespace ProductStore.Services
{
    public class UserService : IUserService
    {
        public User CreateUser(User user)
        {
            var users = JsonConvert.DeserializeObject<IReadOnlyList<User>>(File.ReadAllText("data/users.json"));
            user.Id = users.Count + 1;
            users.Append(user);

            File.WriteAllText("data/users.json", JsonConvert.SerializeObject(users));

            return user;
        }

        public void DeleteUser(int id)
        {
            throw new NotImplementedException();
        }

        public IReadOnlyList<User> GetAllUsers()
        {
            using (StreamReader file = File.OpenText("data/users.json"))
            {
                JsonSerializer serializer = new JsonSerializer();
                var users = (IReadOnlyList<User>)serializer.Deserialize(file, typeof(IReadOnlyList<User>));
                return users;
            }
        }

        public User UpdateUser(int id, string name)
        {
            throw new NotImplementedException();
        }
    }
}
