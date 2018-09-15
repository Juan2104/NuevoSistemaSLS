using SistemaSLS.Data.Context;
using SistemaSLS.Data.Repositories.Base;
using SistemaSLS.Domain.Entities;

namespace SistemaSLS.Data.Repositories
{
    public class TipoDocumentoRepository : BaseRepository<ISlsContext, TipoDocumento>
    {
        public TipoDocumentoRepository(ISlsContext context) : base(context)
        {
        }
    }
}
