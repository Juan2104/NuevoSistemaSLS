
namespace SistemaSLS.Domain.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("TipoDocumento")]
    public partial class TipoDocumento
    {
        [Key]
        public int IdTipoDocumento { get; set; }

        [StringLength(50)]
        public string Descripcion { get; set; }
        
        
          
    }
}
