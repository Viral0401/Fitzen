import React, {useState} from 'react'
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const AIMealPlan = () => {
    const [prompt, setPrompt] = useState('');
    const [generatedText, setGeneratedText] = useState('');
    const [promptsList] = useState(['Weight Loss', 'Muscle Gain', 'Low Carb', 'Vegetarian']);

    const [loading, setLoading] = useState(false);
  
    const handleGenerate = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:5000/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setGeneratedText(data.generated_text);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    const samp_prompts = [
        "List out a breakfast plan for weight loss without explanation.",
        "Name 10 food items for a weight loss diet without explaining each.",
        "Name 5 foods for vegetarian protein intake without explanation.",
        "Tell me the names of 5 foods that help with weight gain."
      ];
      
      const handleSamplePromptClick = (selectedPrompt) => {
        setPrompt(selectedPrompt);
      };
  
    return (
      <div className="h-full w-full">
        <h1 className='text-center tracking-widest text-4xl mt-2 bg-gradient-to-r from-blue-600 to-blue-200 text-white font-extrabold py-2'>Healthy Meal Plan Generator</h1>
        <div className='flex items-start justify-around w-full p-3 gap-5'>
            <div className='flex flex-col items-center justify-around w-[50%] p-3'>
                <div className='text-2xl my-5 text-center'>
                    <label htmlFor="prompt" className=''>Select a Meal Plan:</label>&nbsp;&nbsp;&nbsp;
                    <select id="prompt" className='cursor-pointer text-lg' value={prompt} onChange={(e) => setPrompt(e.target.value)}>
                        <option value="" disabled>Select a Prompt</option>
                        {promptsList.map((option) => (
                        <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    
                    <p className='text-center mt-5'>OR</p>
                    <p className='mt-5'>Select Sample Prompts</p>
                    {samp_prompts.map((prompt, index) => (
                            <div key={index} className=' 
                            button w-full h-10 bg-blue-500  cursor-pointer select-none
                            active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                            active:border-b-[0px] text-white font-extrabold
                            transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
                            rounded-full  border-[1px] border-blue-400 text-sm mt-5 px-5 flex items-center justify-start'
                            onClick={() => handleSamplePromptClick(prompt)}>
                            <p>{prompt}</p>
                            </div>
                    ))}
                </div>
                <Button onClick={handleGenerate} disabled={!prompt}>Generate Meal Plan</Button>
            </div>

            <div className='w-[50%] py-8'>
                <h2 className='text-3xl tracking-widest font-bold bg-gradient-to-r from-blue-400 to-blue-200 text-white'>Generated Meal Plan:</h2>
                {loading ? (
                    <div className="flex justify-center items-center mt-10">
                        <CircularProgress />
                    </div>
                ) : (
                    <p className='mt-10 text-lg'>{generatedText}</p>
                )}
            </div>
        </div>
      </div>
    );
}

export default AIMealPlan

// cursor-pointer transition duration-300 hover:-translate-y-1 w-full px-3 py-2 mt-5 text-base rounded-full bg-blue-400 shadow-2xl