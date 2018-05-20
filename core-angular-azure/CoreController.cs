using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreAngularAzure
{
    [Route("api/core")]
    public class CoreController : Controller
    { 
        // GET: api/core
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Hey", "Universe", "And", "Wiener Dogs"};
        }
    }
}
