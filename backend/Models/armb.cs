namespace backend;

public class Armb
{
    public string? Ver { get; set; }
    public Board[]? Boards { get; set; }
}

public class Board
{
    public string? Name { get; set; }
    public string? Supp { get; set; }
    public string? Text { get; set; }
    public List<string>? Kernels { get; set; }
    public string? LanName { get; set; }
}

public class BasicProgs
{
    public string? Name { get; set; }
    public string? Text { get; set; }

}