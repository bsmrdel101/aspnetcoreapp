using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using aspnetcoreapp.Models;

namespace aspnetcoreapp.Controllers;

[ApiController]
[Route("[controller]")]
public class TaskController : ControllerBase
{
    [HttpGet(Name = "GetTasks")]
    public TaskItem[] GetTasks()
    {
        TaskItem[] items = {
            new TaskItem {
                Id = 0,
                Name = "Wash Dishes",
                isComplete = false
            },
            new TaskItem {
                Id = 1,
                Name = "Walk the dog",
                isComplete = false
            },
            new TaskItem {
                Id = 2,
                Name = "File taxes",
                isComplete = true
            }
        };

        return items;
    }
}
