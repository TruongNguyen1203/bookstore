using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Domain.Enum;

namespace Domain
{
    public class Order
    {
        public Guid Id { get; set; }
        public DateTime OrderDate { get; set; }
        public int Status { get; set; }
        public int PaymentMethod { get; set; }
        public double SubTotal { get; set; }
        public string OrderNote { get; set; }
        public string UserId { get; set; }
        
        [ForeignKey("DeliveryMethod")]
        public Guid DeliveryMethodId { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
        public ICollection<Item> Items { get; set; }
        public Address AddressToShip { get; set; }

        public double GetTotal()
        {
            return SubTotal + DeliveryMethod.Price;
        }
    }
}