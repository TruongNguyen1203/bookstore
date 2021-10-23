using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Item
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public string ProductName { get; set; }
        public Guid AuthorId { get; set; }
        public string AuthorName { get; set; }
        public string PictureUrl { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public int StockStatus { get; set; } 
    }
}