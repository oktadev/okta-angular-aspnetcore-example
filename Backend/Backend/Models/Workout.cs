using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Workout
    {
        public int Id { get; set; }
        [Required]
        public DateTime Date { get; set; }
        public int DistanceInMeters { get; set; }
        [Required]
        public long TimeInSeconds { get; set; }

        [JsonIgnore]
        public string UserId { get; set; }
    }
}
