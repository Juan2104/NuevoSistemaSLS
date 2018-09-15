using SistemaSLS.Data.Context;
using SistemaSLS.Data.Repositories.Base;
using SistemaSLS.Domain.Entities;

namespace SistemaSLS.Data.Repositories
{
   public class TipoPersonaRepository : BaseRepository<ISlsContext, TipoPersona>
    {
        public TipoPersonaRepository(ISlsContext context) : base(context)
        {
        }
    }
}
