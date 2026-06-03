/**
 * DRA. FABBYWLA MEDEIROS - PREMIUM LANDING PAGE JS LOGIC
 * Includes: Sticky Header, Mobile Navigation, Interactive Beauty Quiz & custom WhatsApp generator.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. STICKY HEADER & SCROLL LOGIC
       ========================================================================== */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       2. MOBILE MENU NAVIGATION
       ========================================================================== */
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    /* ==========================================================================
       3. ANIMATED FAQ ACCORDION
       ========================================================================== */
    const accordionHeaders = document.querySelectorAll('.accordion-title');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parentItem = header.parentElement;
            const content = header.nextElementSibling;
            const isActive = parentItem.classList.contains('active');

            // Close all other accordions
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = null;
            });

            // Toggle current
            if (!isActive) {
                parentItem.classList.add('active');
                // Use scrollHeight to animate perfectly
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    /* ==========================================================================
       4. INTERACTIVE BEAUTY QUIZ (WOW FEATURE)
       ========================================================================== */
    // Quiz Config & Data
    const quizData = {
        optionsStep2: {
            rugas: [
                { value: "testa", label: "Linhas Horizontais na Testa", desc: "Rugas aparentes ao levantar as sobrancelhas." },
                { value: "olhos", label: "Pés de Galinha (Área dos Olhos)", desc: "Rugas finas que se formam ao sorrir." },
                { value: "glabela", label: "Ruga Brava entre as Sobrancelhas", desc: "Vinco vertical que surge ao fazer cara de bravo." }
            ],
            volume: [
                { value: "labios", label: "Lábios Finos ou sem Contorno", desc: "Desejo de definição, volume ou hidratação." },
                { value: "olheiras", label: "Olheiras Profundas (Olhar Cansado)", desc: "Sulco lacrimal fundo que causa aspecto de cansaço." },
                { value: "sulcos", label: "Bigode Chinês ou Linhas de Marionete", desc: "Sulcos marcados ao redor da boca." }
            ],
            sustentacao: [
                { value: "mandibula", label: "Perda do Contorno da Mandíbula", desc: "Falta de definição na linha da mandíbula e queixo." },
                { value: "bochechas", label: "Bochechas Murchas ou Efeito Caído", desc: "Perda de volume na maçã do rosto (efeito buldogue)." },
                { value: "papada", label: "Acúmulo de Gordura na Papada", desc: "Gordura submentoniana que prejudica o perfil da mandíbula." }
            ],
            pele: [
                { value: "ressecamento", label: "Pele Desidratada e Sem Brilho", desc: "Falta de viço, textura áspera e ressecamento." },
                { value: "envelhecimento", label: "Envelhecimento Precoce da Pele", desc: "Perda precoce de elasticidade e pequenas rugas finas." }
            ]
        },
        recommendations: {
            rugas_testa: {
                title: "Protocolo Toxina Botulínica (Botox) - Testa",
                desc: "Aplicação precisa de Botox na musculatura da testa para suavizar e prevenir marcas definitivas, garantindo uma expressão rejuvenescida, leve e natural."
            },
            rugas_olhos: {
                title: "Protocolo Toxina Botulínica (Botox) - Pés de Galinha",
                desc: "Aplicação focada ao redor dos olhos para atenuar as rugas dinâmicas do sorriso, sem congelar a expressão ou alterar seu olhar."
            },
            rugas_glabela: {
                title: "Protocolo Toxina Botulínica (Botox) - Glabela",
                desc: "Tratamento de precisão no músculo da glabela para relaxar a tensão que causa o semblante tenso ou bravo, promovendo leveza imediata ao rosto."
            },
            volume_labios: {
                title: "Protocolo Lips Premium (Preenchimento Labial)",
                desc: "Preenchimento estratégico com ácido hialurônico premium focado em desenhar o contorno, hidratar profundamente e devolver ou criar volume com naturalidade."
            },
            volume_olheiras: {
                title: "Protocolo Preenchimento de Olheiras Profundas",
                desc: "Correção do sulco lacrimal com ácido hialurônico de alta maleabilidade para atenuar a sombra da olheira e devolver o ar descansado ao olhar."
            },
            volume_sulcos: {
                title: "Protocolo Preenchimento de Sulcos Faciais",
                desc: "Suavização do bigode chinês e linhas de marionete com ácido hialurônico, restabelecendo o suporte das áreas afetadas sem aumentar o volume lateral."
            },
            sustentacao_mandibula: {
                title: "Protocolo Contorno & Estrutura Mandibular",
                desc: "Preenchimento de pontos de sustentação na mandíbula e mento com ácido hialurônico de alta densidade, promovendo definição de perfil e rejuvenescimento tridimensional."
            },
            sustentacao_bochechas: {
                title: "Protocolo Lift & Colágeno (Bioestimuladores + Fios PDO)",
                desc: "Combinação potente de fios de sustentação PDO para tracionamento mecânico imediato, associada a bioestimuladores de colágeno para sustentação e firmeza a longo prazo."
            },
            sustentacao_papada: {
                title: "Protocolo Lipo de Papada Enzimática",
                desc: "Microaplicações de enzimas lipolíticas na gordura submentoniana para degradação e eliminação gradual das células adiposas, redefinindo o ângulo do pescoço."
            },
            pele_ressecamento: {
                title: "Protocolo Glow Skin (Skinbooster + Nutrição)",
                desc: "Tratamento de hidratação injetável profunda (Skinbooster) que repõe ácido hialurônico e nutrientes diretamente nas camadas dérmicas, devolvendo viço, elasticidade e maciez instantâneos."
            },
            pele_envelhecimento: {
                title: "Protocolo Skin Regeneration & Colágeno",
                desc: "Associação de bioestimuladores de colágeno injetáveis e hidratação para reestruturar as fibras elásticas da pele, atenuando rugas finas e prevenindo o envelhecimento precoce."
            }
        }
    };

    let currentStep = 1;
    const answers = {
        area: '',
        complaint: '',
        complaintLabel: '',
        name: ''
    };

    // Make functions globally accessible so inline onclick handlers work
    window.goToStep = (step) => {
        if (step === 2) {
            // Save selected area
            const selectedAreaInput = document.querySelector('input[name="area"]:checked');
            if (!selectedAreaInput) return;
            answers.area = selectedAreaInput.value;
            
            // Build options for step 2 dynamically
            const optionsContainer = document.getElementById('step2Options');
            const step2Title = document.getElementById('step2Title');
            
            optionsContainer.innerHTML = '';
            
            // Dynamic Title Based on selection
            const areaNames = {
                rugas: "Rugas e Linhas",
                volume: "Volume e Contorno",
                sustentacao: "Definição e Sustentação",
                pele: "Viço e Hidratação"
            };
            step2Title.textContent = `Qual o principal incômodo sobre ${areaNames[answers.area]}?`;

            const currentOptions = quizData.optionsStep2[answers.area];
            currentOptions.forEach((opt, idx) => {
                const checked = idx === 0 ? 'checked' : '';
                optionsContainer.innerHTML += `
                    <label class="quiz-option">
                        <input type="radio" name="complaint" value="${opt.value}" ${checked}>
                        <span class="option-icon">✓</span>
                        <span class="option-content">
                            <strong>${opt.label}</strong>
                            <small>${opt.desc}</small>
                        </span>
                    </label>
                `;
            });
        }
        
        if (step === 3) {
            // Save selected complaint
            const selectedComplaintInput = document.querySelector('input[name="complaint"]:checked');
            if (!selectedComplaintInput) return;
            answers.complaint = selectedComplaintInput.value;
            answers.complaintLabel = selectedComplaintInput.parentElement.querySelector('strong').textContent;
        }

        // Hide current step, show target step
        document.querySelectorAll('.quiz-step').forEach(el => el.classList.remove('active'));
        
        const targetStepEl = document.getElementById(`step${step}`);
        if (targetStepEl) {
            targetStepEl.classList.add('active');
        }
        
        currentStep = step;
        
        // Progress bar calculations
        const progressPercent = (step / 3) * 75; // 75% for steps, 100% for results
        document.getElementById('quizProgress').style.width = `${progressPercent}%`;
    };

    window.generateRecommendation = () => {
        const userNameInput = document.getElementById('userName');
        answers.name = userNameInput.value.trim() || 'Paciente';
        
        // Compute recommendation key
        let recKey = `${answers.area}_${answers.complaint}`;
        
        // Get recommendation details
        const recommendation = quizData.recommendations[recKey] || quizData.recommendations['rugas_testa'];
        
        // Inject results into UI
        document.getElementById('userGreeting').innerHTML = `<strong>${answers.name}</strong>, com base nas suas queixas clínicas, montamos este direcionamento especial:`;
        document.getElementById('recTitle').textContent = recommendation.title;
        document.getElementById('recDesc').textContent = recommendation.desc;
        
        // WhatsApp API text encoding
        const dddAndPhone = "5511999998888"; // Dra Fabbywla Whatsapp
        const introArea = {
            rugas: "Suavizar Rugas e Linhas",
            volume: "Volume e Contorno",
            sustentacao: "Definição e Sustentação",
            pele: "Melhorar o Viço e Hidratação"
        };
        
        const textMessage = `Olá Dra. Fabbywla! Realizei a Pré-Consulta digital no seu site e gostaria de agendar uma avaliação clínica presencial. Meus dados:\n\n- *Nome*: ${answers.name}\n- *Objetivo principal*: ${introArea[answers.area]}\n- *Queixa específica*: ${answers.complaintLabel}\n- *Indicação sugerida*: ${recommendation.title}`;
        
        const encodedText = encodeURIComponent(textMessage);
        const whatsAppUrl = `https://wa.me/${dddAndPhone}?text=${encodedText}`;
        
        // Inject URL to button
        const whatsappBtn = document.getElementById('whatsAppQuizBtn');
        if (whatsappBtn) {
            whatsappBtn.href = whatsAppUrl;
        }
        
        // Show result step
        document.querySelectorAll('.quiz-step').forEach(el => el.classList.remove('active'));
        document.getElementById('stepResult').classList.add('active');
        
        // Fill progress to 100%
        document.getElementById('quizProgress').style.width = '100%';
    };

    window.restartQuiz = () => {
        // Clear forms
        document.getElementById('userName').value = '';
        const defaultRadio = document.querySelector('input[name="area"][value="rugas"]');
        if (defaultRadio) defaultRadio.checked = true;
        
        // Go back to first step
        goToStep(1);
    };

});
