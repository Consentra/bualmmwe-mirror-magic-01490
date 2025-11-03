import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://ragju45-bualmmwe.manus.space/1761890514717.jpg" 
            alt="About RAG 45" 
            className="w-full rounded-lg mb-8"
          />
          
          <h1 className="text-5xl font-bold mb-4 text-center">About RAG 45</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">Our Story, Our Legacy</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">The RAG Event Tradition</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The Rag Event is a long-standing tradition at Jahangirnagar University, marking the solemn, yet joyful, transition from student life to the professional world. For the 45th Batch, however, this event is far more than a ceremony—it is <strong>The Final Chapter</strong> of a story written over countless late nights, shared triumphs, and unforgettable moments across this campus.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This celebration is a sacred pledge to immortalize the friendships forged on the red brick pathways and to honor the collective journey that has shaped us into the individuals we are today.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Purpose and Commitment</h2>
              <p className="text-lg text-muted-foreground mb-6">The RAG Event is built on three core pillars:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Unity</h3>
                  <p className="text-lg text-muted-foreground">
                    To bring every single member of the batch together, one last time, to stand united as a family. This is our definitive wake-up call to ensure no one is left behind.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Memory</h3>
                  <p className="text-lg text-muted-foreground">
                    To actively contribute and preserve the shared memories of our academic life, from the nervousness of the first day to the pride of graduation.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Celebration</h3>
                  <p className="text-lg text-muted-foreground">
                    To host a grand, high-energy festival that serves as a spectacular and organized farewell, showcasing the talent and collective spirit of JU-45.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Beyond the Event: Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                When the music fades and the rally ends, the JU-45 legacy will remain. This Rag Event is the foundation of our alumni connection. It is the crucial step in establishing an active, lifelong network dedicated to mutual support and preserving the identity of the 45th Batch.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We call upon every batchmate to not just attend, but to <strong>Run with us</strong> in making this farewell the most well-organized, joyous, and emotionally resonant event in JU's history.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
