using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class MemberContext:DbContext
    {
        public MemberContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Member> Members { get; set; }
    }
}
