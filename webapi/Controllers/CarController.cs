using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using webapi.Commands;
using webapi.Models;

namespace webapi.Controllers;

[ApiController]
[Route("[controller]")]
public class CarController : ControllerBase
{
    private static List<Car> CARS = new List<Car>();

    [HttpPost]
    public ActionResult Add(AddCarCommand command)
    {
        if (CARS.Any(c => c.Year == command.Year && c.Make == command.Make && c.Model == command.Model)) {
            return ValidationProblem("Car has already been added.");
        }

        CARS.Add(new Car(command.Year, command.Make, command.Model));
        return Ok();
    }
}
