using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductStore.Models
{
    public class OrderDetails
    {
        public int Id { get; set; }
        public int ProductQuantity { get; set; }
        public int ProductId { get; set; }
        public int OrderId { get; set; }
    }
}
