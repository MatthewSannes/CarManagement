namespace webapi.Models
{
    public class Car
    {
        public Car(string year, string make, string model)
        {
            Year = year;
            Make = make;
            Model = model;
        }

        public string Year { get; private set; }

        public string Make { get; private set; }

        public string Model { get; private set; }
    }
}
