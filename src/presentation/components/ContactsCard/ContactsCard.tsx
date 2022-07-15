import ContactCard from './ContactCard'

const ContactsCard = () => (
  <div className="flex min-w-[280px] flex-col rounded-lg bg-white p-5 pt-4 shadow-md">
    <span className="mono-spaced mb-4 text-lg text-gray-900">Contatos</span>

    <ContactCard />
    <ContactCard />
    <ContactCard />
  </div>
)

export default ContactsCard
