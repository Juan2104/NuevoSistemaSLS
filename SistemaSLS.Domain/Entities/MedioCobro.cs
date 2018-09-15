
namespace SistemaSLS.Domain.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("MedioCobro")]
    public partial class MedioCobro
    {
        [Key]
        public int IdMedioCobro { get; set; }

        [StringLength(50)]
        public string Descripcion { get; set; }



    }
}
