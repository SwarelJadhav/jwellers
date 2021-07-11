using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController : ControllerBase
    {
        private readonly MemberContext _context;
        public MembersController(MemberContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<ActionResult<Member>> Post(Member member)
        {
            _context.Members.Add(member);
            await _context.SaveChangesAsync();
            return new Member
            {
                Name = member.Name,
                Address = member.Address,
                Mobile = member.Mobile,
                PAN = member.PAN
            };
        }
    }
}
