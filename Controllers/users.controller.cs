using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace typescript_react.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    [HttpGet]
    public IEnumerable<User> Get()
    {
        return new List<User> {
            new User {
                Id = 1,
                Name = "user1",
            },
            new User {
                Id = 2,
                Name = "user2",
            },
        };
    }

    [HttpGet("{id}")]
    public User Get(int id)
    {
        return new User {
            Id = id,
            Name = "user1",
        };
    }

    [HttpPost]
    public void Post([FromBody] User user)
    {
    }

} 

