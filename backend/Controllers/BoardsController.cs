using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Plugins;
using System.IO;
using System.Reflection.Metadata.Ecma335;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class BoardsController : ControllerBase
{
    private readonly string boards_path = System.Environment.GetFolderPath(System.Environment.SpecialFolder.UserProfile) + "/build/config/boards";
    
    [HttpGet(Name = "Boards")]
    public List<Board> Get()
    {
        DirectoryInfo dir = new DirectoryInfo(boards_path);
        List<Board> boards = new List<Board>();
        foreach (FileInfo file in dir.GetFiles()) 
        { 
            if (file.Extension == ".md")
            continue;
            string board_text = "";
            List<string> kernels = [];
            StreamReader f = new StreamReader(file.FullName);
            while (!f.EndOfStream)
            {
                string? s = f.ReadLine();
                int len = s.Length - 1;
                int ind;

                ind = s.IndexOf("BOARD_NAME");
                if (ind >= 0)
                {
                    s = s.Remove(len); 
                    board_text = s.Remove(0, ind + 12);
                    continue;
                }

                ind = s.IndexOf("KERNEL_TARGET");
                if (ind >= 0)
                {
                    int count = 0;
                    s = s.Remove(len); 
                    s = s.Remove(0, ind + 15);

                    ind = s.IndexOf("edge");
                    if (ind >= 0)
                    {
                        count += 1;
                        kernels.Add("edge");
                        s = s.Remove(ind, 4);
                    }
                    ind = s.IndexOf("current");
                    if (ind >= 0)
                    {
                        count += 1;
                        kernels.Add("current");
                        s = s.Remove(ind, 7);
                    }
                    ind = s.IndexOf("legacy");
                    if (ind >= 0)
                    {
                        count += 1;
                        kernels.Add("legacy");
                        s = s.Remove(ind, 6);
                    }
                    ind = s.IndexOf("vendor");
                    if (ind >= 0)
                    {
                        count += 1;
                        kernels.Add("vendor");
                        s = s.Remove(ind, 6);
                    }
                    ind = s.IndexOf("collabora");
                    if (ind >= 0)
                    {
                        count += 1;
                        kernels.Add("collabora");
                        s = s.Remove(ind, 9);
                    }
                    s = s.Trim( new Char[] { ',','"', '=', '\n'} );
                    if (s.Length > 0)
                    {
                        Console.WriteLine(file.Name + "-" + s + "-" + "неизвестное ядро");
                    }
                    if (count < 1)
                    {
                        Console.WriteLine(file.Name + "-" + "Без ядер, или неизвестное");
                    }
                    break;
                }
            }
            f.Close();

            boards.Add(new Board{
                Name = Path.GetFileNameWithoutExtension(file.Name),
                Supp = file.Extension,
                Text = board_text,
                Kernels = kernels,
                LanName ="-"
            });
        }
        return boards;
    }
    // public Board Get()
    // {
    //     return new Board
    //     {
    //         Name = System.Environment.GetFolderPath(System.Environment.SpecialFolder.UserProfile),
    //         Supp = "Очень долгая",
    //         Text = "Охеренная доска"
    //     };
    // }
}