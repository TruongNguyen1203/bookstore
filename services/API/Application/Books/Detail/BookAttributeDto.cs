using System;

namespace Application.Books.Detail
{
    public class BookAttributeDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int TotalStock { get; set; }
        public double SalePrice { get; set; }
        public DateTime SalePriceStartDate { get; set; }
        public DateTime SalePriceEndDate { get; set; }
    }
}