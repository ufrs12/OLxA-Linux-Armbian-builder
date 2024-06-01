using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class DistrsController : ControllerBase
{
    private readonly string distrs_path = System.Environment.GetFolderPath(System.Environment.SpecialFolder.UserProfile) + "/build/config/distributions";
    
    [HttpGet(Name = "Distrs")]
    public List<Distr> Get()
    {
        DirectoryInfo main_dir = new DirectoryInfo(distrs_path);
        List<Distr> distrs = new List<Distr>();

        foreach (DirectoryInfo dir in main_dir.GetDirectories()) 
        {   
            string text = "";
            using (StreamReader sr = new StreamReader(dir.FullName + "/name"))
            {
                text = sr.ReadToEnd().Trim();
            }

            string supp = "";
            using (StreamReader sr = new StreamReader(dir.FullName + "/support"))
            {
                supp = sr.ReadToEnd().Trim();
            }

            string archs = "";
            using (StreamReader sr = new StreamReader(dir.FullName + "/architectures"))
            {
                archs = sr.ReadToEnd().Trim();
            }

            distrs.Add(new Distr{
                Name = dir.Name,
                Supp = supp,
                Text = text,
                Archs = archs.Split(','),
            });
        }

        List<Distr> SortedList = distrs.OrderBy(o=>o.Text).ToList();
        return SortedList;
    }
}