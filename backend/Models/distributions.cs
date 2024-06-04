namespace backend;


public class Distr
{
    public string? Name { get; set; }
    public string? Supp { get; set; }
    public string? Text { get; set; }
    public string[]? Archs { get; set; }
    public CLI? CLI { get; set; }
}

public class CLI
{
    public List<string>? Packages { get; set; }
    public List<string>? Additional { get; set; }
    public List<string>? Uninstall { get; set; }
}
