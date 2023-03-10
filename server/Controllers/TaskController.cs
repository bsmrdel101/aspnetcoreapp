using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using aspnetcoreapp.Models;

namespace aspnetcoreapp.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TaskController : ControllerBase
{
    private readonly TaskContext _context;

    public TaskController(TaskContext context)
    {
        _context = context;
    }

    // GET: api/Task
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TaskItem>>> GetTaskItems()
    {
        if (_context.TaskItems == null)
        {
            return NotFound();
        }
        return await _context.TaskItems.ToListAsync();
    }

    // GET: api/Task/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<TaskItem>> GetTaskItem(long id)
    {
        if (_context.TaskItems == null)
        {
            return NotFound();
        }
        TaskItem? taskItem = await _context.TaskItems.FindAsync(id);

        if (taskItem == null)
        {
            return NotFound();
        }

        return taskItem;
    }

    // PUT: api/Task/{id}
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTaskItem(long id, TaskItem taskItem)
    {
        if (id != taskItem.Id)
        {
            return BadRequest();
        }

        _context.Entry(taskItem).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TaskItemExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/Task
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<TaskItem>> PostTaskItem(TaskItem taskItem)
    {
        _context.TaskItems.Add(taskItem);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTaskItem), new { id = taskItem.Id }, taskItem);
    }

    // DELETE: api/Task/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTaskItem(long id)
    {
        if (_context.TaskItems == null)
        {
            return NotFound();
        }
        var taskItem = await _context.TaskItems.FindAsync(id);
        if (taskItem == null)
        {
            return NotFound();
        }

        _context.TaskItems.Remove(taskItem);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool TaskItemExists(long id)
    {
        return (_context.TaskItems?.Any(e => e.Id == id)).GetValueOrDefault();
    }
}
