﻿using System;
using System.Collections.Generic;

namespace Model.Models
{
    public partial class ContactType
    {
        public ContactType()
        {
            BusinessEntityContact = new HashSet<BusinessEntityContact>();
        }

        public int ContactTypeId { get; set; }
        public string Name { get; set; }
        public DateTime ModifiedDate { get; set; }

        public ICollection<BusinessEntityContact> BusinessEntityContact { get; set; }
    }
}
