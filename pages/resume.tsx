import Bar from '../components/Bar'
import { languages, tools } from '../data'

const Resume = () => {
   return (
      <div className='px-6 py-2'>
         {/* //! Education & Experience */}
         <div className='grid gap-6 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Education</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                     Web Development
                  </h5>
                  <p className='font-semibold'>
                     Epicodus (2023)
                  </p>
                  <p className='my-3'>
                     I am currently pursuing a Full Stack Web Development course.
                  </p>
               </div>
            </div>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Experience</h5>
               <div className=''>
                  <h5 className='my-2 text-xl font-bold'>
                     Jr. Software Developer
                  </h5>
                  <p className='font-semibold'>Internship</p>
                  <p className='my-3'>TBD</p>
               </div>
            </div>
         </div>

         {/*Languages & Tools */}
         <div className='grid gap-9 md:grid-cols-2'>
            <div>
               <h5 className='my-3 text-2xl font-bold'>Languages and Tools</h5>
               <div className='my-2'>
                  {languages.map((language, i) => (
                     <Bar value={language} key={i} />
                  ))}
               </div>
            </div>

            <div>
               <h5 className='my-3 text-2xl font-bold'>Frameworks & Testing</h5>
               <div className='my-2'>
                  {tools.map((tool, i) => (
                     <Bar value={tool} key={i} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Resume