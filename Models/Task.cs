namespace aspnetcoreapp.Models;

public class TaskItem
{
    public long Id { get; set; }
    public string? Name { get; set; }
    public bool isComplete { get; set; }
}
