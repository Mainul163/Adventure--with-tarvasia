import React from 'react';
import { Funnel, FunnelChart, LabelList, Tooltip } from 'recharts';
const data = [
    {
      "value": 100,
      "name": "Nepal",
      "fill": "#8884d8"
    },
    {
      "value": 80,
      "name": "Bangladesh",
      "fill": "#83a6ed"
    },
    {
      "value": 50,
      "name": "Bhutan",
      "fill": "#8dd1e1"
    },
    {
      "value": 40,
      "name": "Srilanka",
      "fill": "#82ca9d"
    },
    {
      "value": 26,
      "name": "Maldip",
      "fill": "#a4de6c"
    }
  ]
const Chart = () => {
    return (
        <section className='margindiv text-center'>
            <h1 className='header-text'>Discovered Areas</h1>
              <div className='d-flex justify-content-center mt-5'>
              <div className='row'>
                <div className='col-md-12'>
                     

                    <FunnelChart width={730} height={250}>
                        <Tooltip />
                        <Funnel
                            dataKey="value"
                            data={data}
                            isAnimationActive
                        >
                            <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                        </Funnel>
                    </FunnelChart>
                </div>
            </div>
              </div>
        </section>
    );
};

export default Chart;