
namespace SistemaSLS.Domain.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("CondicionFiscal")]
    public partial class CondicionFiscal
    {
        [Key]
        public int IdCondicionFiscal { get; set; }

        
        public string Descripcion { get; set; }

        public decimal IVA { get; set; }



    }
}
