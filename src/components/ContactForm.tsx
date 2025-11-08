import { useState } from 'react';

interface ContactFormProps {
  type?: 'contact' | 'adhesion' | 'newsletter';
  title?: string;
  description?: string;
}

const ContactForm = ({ 
  type = 'contact',
  title = 'Contactez-nous',
  description = 'Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.'
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    organisation: '',
    pays: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (à remplacer par votre API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        organisation: '',
        pays: '',
        telephone: '',
        sujet: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-start">
          <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-semibold">Message envoyé avec succès !</p>
            <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="font-semibold">Erreur lors de l'envoi</p>
          <p className="text-sm">Veuillez réessayer plus tard.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              value={formData.prenom}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0095D9] focus:border-transparent transition"
              placeholder="Votre prénom"
            />
          </div>

          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0095D9] focus:border-transparent transition"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0095D9] focus:border-transparent transition"
            placeholder="votre.email@exemple.com"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-2">
              Organisation {type === 'adhesion' && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              required={type === 'adhesion'}
              value={formData.organisation}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0095D9] focus:border-transparent transition"
              placeholder="Nom de votre université"
            />
          </div>

          <div>
            <label htmlFor="pays" className="block text-sm font-medium text-gray-700 mb-2">
              Pays <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="pays"
              name="pays"
              required
              value={formData.pays}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0095D9] focus:border-transparent transition"
              placeholder="Votre pays"
            />
          </div>
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0095D9] focus:border-transparent transition"
            placeholder="+33 6 12 34 56 78"
          />
        </div>

        {type === 'contact' && (
          <div>
            <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
              Sujet <span className="text-red-500">*</span>
            </label>
            <select
              id="sujet"
              name="sujet"
              required
              value={formData.sujet}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0095D9] focus:border-transparent transition"
            >
              <option value="">Sélectionnez un sujet</option>
              <option value="information">Demande d'information</option>
              <option value="adhesion">Adhésion à l'AII</option>
              <option value="partenariat">Partenariat</option>
              <option value="formation">Formations</option>
              <option value="recherche">Projet de recherche</option>
              <option value="autre">Autre</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0095D9] focus:border-transparent transition resize-none"
            placeholder="Décrivez votre demande en détail..."
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="rgpd"
            required
            className="mt-1 h-4 w-4 text-[#0095D9] focus:ring-[#0095D9] border-gray-300 rounded"
          />
          <label htmlFor="rgpd" className="ml-3 text-sm text-gray-600">
            J'accepte que mes données personnelles soient collectées et traitées conformément à la{' '}
            <a href="#" className="text-[#0095D9] hover:underline">politique de confidentialité</a> de l'AII. <span className="text-red-500">*</span>
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0095D9] hover:bg-[#0077B6] text-white font-semibold py-4 px-8 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              <>
                Envoyer le message
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
