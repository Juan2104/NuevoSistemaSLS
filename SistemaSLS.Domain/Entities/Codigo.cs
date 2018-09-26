
namespace SistemaSLS.Domain.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Codigo")]
    public partial class Codigo
    {

        [Key]

        public int IdCodigo { get; set; }
        public string Descripcion { get; set; }
        

    }
}
